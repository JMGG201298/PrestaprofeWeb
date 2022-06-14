<?php
namespace App\Services;

use GuzzleHttp\Client;

class NotificationService{
    function send_notification_FCM($notification_id, $title, $message, $id,$type) {
 
        $accesstoken = env('FCM_KEY');
        $client = new Client([]);//COMENTARIO

        $method = 'POST';
        $requestUrl = "https://fcm.googleapis.com/fcm/send";
        $formParams = [
            "notification" => [
                "body" => "Texto de la notificacion",
                "title" => "Titulo"
            ],
            'priority' => 'high',
            'data' => [
                'data' => 'esta es un data'
            ],
            "registration_ids"=>["ce5UBaFfQlOqx2Y0okGnD-:APA91bGUGTou8hn3UmIeQt-Wnzfn-VeE1Tz7RkoJI4bcRdOeQpG1PTchHLt3sVggj9XW0aEu9ptbQMgzj_44A4lD3SUhapSxwntRwXUzuI2yClN4vSsegf6jFcncPOKb66n9gVdGjNc1"]
        ];
        $headers = [
            'Accept'=> 'application/json',
            'Authorization' => 'key=AAAALvkZHhs:APA91bFUEkcoYwjg6lGsVyjELWNzUuF3OR5gIWaQOtd1rmZa6-p0dsOuzZhDqHytbOLDnBpqfPD-xYYL9LNl3HnnCy2V3Ajlo1CB3M5EOUdtSBDLvpAf8i75gwT9cPnSuCicNBZvZAvl',
            'Content-Type' => 'application/json'
        ];

        $response = $client->request($method, $requestUrl, [
            'json' => $formParams,
            'headers' => $headers
            //'verify' => $this->verifySSL
        ]);

        return $response;
    }
}