<?php

use yii\web\JsonParse;

$params = array_merge(
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/../../config/params.php')
);



$db     = require(__DIR__ . '/../../config/db.php');

return [
    'id' => 'basic',
    'basePath' => dirname(__DIR__).'/..',
    'bootstrap' => ['log'],
    'modules' => [
        'v1' => [
            'class' => 'app\rest\modules\v1\Module',
            'controllerNamespace' => 'app\rest\modules\v1\controllers' 
        ]
    ],
    'components' => [
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => false,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'request' => [
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ]
        ],      
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                ['class' => 'yii\rest\UrlRule', 'controller' => ['user','v1/account']],
                'OPTIONS v1/user/login' => 'v1/user/login',
                'POST v1/user/login' => 'v1/user/login',
                'OPTIONS v1/account/create' => 'v1/account/create',
                'POST v1/account/create' => 'v1/account/create',
                'OPTIONS v1/account/recover' => 'v1/account/recover',
                'POST v1/account/recover' => 'v1/account/recover',
            ],
        ],
        'db' => $db,
    ],
    'params' => $params,
];
