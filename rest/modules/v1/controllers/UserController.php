<?php
namespace app\rest\modules\v1\controllers; 

use app\models\LoginForm;
use app\models\User;
use yii\rest\Controller;
use yii\filters\ContentNegotiator;
use yii\web\Response;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE");
header("Access-Control-Allow-Headers: Authorization, Lang, content-type");
header("Access-Control-Allow-Credentials: true");
/**
 * Class UserController
 * @package rest\versions\v1\controllers
 */
class UserController extends Controller
{
    public $modelClass = "app\models\User";
    /**
     * This method implemented to demonstrate the receipt of the token.
     * Do not use it on production systems.
     * @return string AuthKey or model with errors
     */
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
    
    public function actionLogin()
    {
        $model = new LoginForm();
        /*
        *   Creado por: Rodrigo Da Costa
        *   Fecha: 13/01/2016
        */
        //Se recolectan los datos del json
        $data = \Yii::$app->request->post();
        
        //Se maneja la peticion options
        if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { header("HTTP/1.1 200 OK"); die(); }
        //Se guardan en el modelo (el $model->load retorna nulo, por eso se hizo así)
        $model->username=$data['username'];
        $model->password=$data['password'];
        if ($model->login()) {
            //Se construye en json lo que va a tomar la aplicación web            
            $response = ['mensaje'=>'Validación correcta','auth_token'=>\Yii::$app->user->identity->getAuthKey(),
            'id_usuario'=>\Yii::$app->user->id,'validacion'=>'ok'];
            return $response;
        } else {
            $response = ['mensaje'=>'Validación incorrecta','auth_token'=>'','validacion'=>'error'];
            return $response;
        }
    }
}
