<?php
namespace app\rest\modules\v1\controllers; 

use app\models\FormRegister;
use app\models\FormRecoverPass;
use app\models\Users;
use app\models\McTuser;
use yii\rest\Controller;
use yii\filters\ContentNegotiator;
use yii\web\Response;
use yii\web\Session;
use yii\widgets\ActiveForm;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE");
header("Access-Control-Allow-Headers: Authorization, Lang, content-type");
header("Access-Control-Allow-Credentials: true");
/**
 * Class AccountController
 * @package rest\versions\v1\controllers
 */
class AccountController extends Controller
{
    public $modelClass = "app\models\FormRegister";

    public function behaviors()
    {
        return [
            'contentNegotiator' => [
                'class' => ContentNegotiator::className(),
                'formats' => [
                    'application/json' => Response::FORMAT_JSON,
                ],
            ],
        ];
    }

    private function randKey($str='', $long=0)
    {
        $key = null;
        $str = str_split($str);
        $start = 0;
        $limit = count($str)-1;
        for($x=0; $x<$long; $x++)
        {
            $key .= $str[rand($start, $limit)];
        }
        return $key;
    }
   

    public function actionCreate()
    {
        $model = new FormRegister;
       
        $msg = null;
        $t = "";
        $ti = "";
        $validacion = "ok";

        $data = \Yii::$app->request->post();
        
        if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { header("HTTP/1.1 200 OK"); die(); }

        $model->name = $data['name'];   
        $model->email = $data['email'];
        $model->phone = $data['phone'];
        $model->password = $data['password'];
        $model->password_repeat = $data['password_repeat'];
        $model->avatar = '';
        $model->type = $data['type'];

        if($model->validate())
        {
            $table = new Users;
            $table->email = $model->email;
            $table->email2 = $model->email;
            $table->password = crypt($model->password, \Yii::$app->params["salt"]);
            $table->authKey = $this->randKey("abcdef0123456789", 200);
            $table->accessToken = $this->randKey("abcdef0123456789", 200);
            $table->role = $model->type;
            if ($table->insert())
            {
                 $user = $table->find()->where(["email2" => $model->email])->one();
                 $id = urlencode($user->id);
                 $authKey = urlencode($user->authKey);
                 $ti = \yii\web\UploadedFile::getInstance($model, 'avatar');
                 $mc_user = new McTuser;
                 if($ti){
                     $rnd = $this->randKey("abcdef0123456789", 50);
                     $fileName = $rnd . str_replace(' ','_',$ti->name);
                     $ti->saveAs(\Yii::getAlias('@webroot') . '/img/system_imgs/' . $fileName);
                     $mc_user->user_avatar = '/img/system_imgs/' . $fileName;
                 }else
                    $mc_user->user_avatar = "/img/system_imgs/pp.png";

                 $mc_user->user_name = $model->name;
                 $mc_user->user_phone = $model->phone;
                 $mc_user->fklogin = $id;

                 if(!$mc_user->insert()){
                    $t = $mc_user->getErrors();
                    $validacion = "error";
                 }
                  
                 /*Yii::$app->mailer->compose('verify', ['name'=>$model->name, 'link'=>'http://micargapp.com'. Yii::getAlias('@web').'/site/confirm?id='.$id."&authKey=".$authKey])
                 ->setTo($user->email2)
                 ->setFrom([Yii::$app->params["adminEmail"] => Yii::$app->params["title"]])
                 ->setSubject("Confirmar registro")
                 ->send();*/
                 
                 /*$model->name = null;   
                 $model->email = null;
                 $model->phone = null;
                 $model->password = null;
                 $model->password_repeat = null;
                 $model->avatar = null;
                 $model->type = null;*/

                 $msg = "Se ha registrado correctamente, un correo de verificación ha sido enviado " . $model->email;
            }
            else
            {
                $msg = "Ha ocurrido un error al llevar a cabo tu registro";
            }
        }
        else
        {
            $msg = $model->getErrors();
            $validacion = "error";
        }
        $response = ['mensaje'=>$msg,'error'=>$t,'validacion'=>$validacion];
        return $response;
    }

    public function actionRecover()
    {
        //Instancia para validar el formulario
        $model = new FormRecoverPass;
     
        //Mensaje que será mostrado al usuario
        $msg = null;
        $validacion = "ok";
        $error = '';

        $data = \Yii::$app->request->post();
        
        if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { header("HTTP/1.1 200 OK"); die(); }

        $model->email = $data['email'];
     
        if ($model->validate())
        {
            //Buscar al usuario a través del email
            $table = Users::find()->where("email=:email", [":email" => $model->email])->one();

            //Si el usuario existe
            if ($table)
            {
                //El id del usuario es requerido para generar la consulta a la tabla users y 
                //restablecer el password del usuario
                $table = Users::find()->where("email=:email", [":email" => $model->email])->one();

                //Esta variable contiene un número hexadecimal que será enviado en el correo al usuario 
                //para que lo introduzca en un campo del formulario de reseteado
                //Es guardada en el registro correspondiente de la tabla users
                $verification_code = $this->randKey("abcdef0123456789", 8);
                //Columna verification_code
                $table->verification_code = $verification_code;
                //Guardamos los cambios en la tabla users
                $table->save();

                //Creamos el mensaje que será enviado a la cuenta de correo del usuario
                /*$subject = "Recuperar password";
                $body = "<p>Copie el siguiente código de verificación para restablecer su password ... ";
                $body .= "<strong>".$verification_code."</strong></p>";
                $body .= "<p><a href='http://localhost/micargapp_v1/web/site/resetpass'>Recuperar password</a></p>";

                //Enviamos el correo
                Yii::$app->mailer->compose()
                ->setTo($model->email)
                ->setFrom([Yii::$app->params["adminEmail"] => Yii::$app->params["title"]])
                ->setSubject($subject)
                ->setHtmlBody($body)
                ->send();*/


                //Mostrar el mensaje al usuario
                $msg = "Le hemos enviado un mensaje a su cuenta de correo para que pueda resetear su password";
            }
            else //El usuario no existe
            {
                $msg = "No Existe el correo solicitado";
                $validacion = "error";
            }
        }
        else
        {
			$msg = "No Existe el correo solicitado";
            $error = $model->getErrors();
            $validacion = "error";
        }
        $response = ['mensaje'=>$msg,'error'=>$error,'validacion'=>$validacion];
        return $response;
    }
}
