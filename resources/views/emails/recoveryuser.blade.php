@component('mail::message')
    Si deseas realmente obtener una nueva contraseña,
    presiona el siguiente botón, de lo contrario, ignora este mensaje
@endcomponent
@component('mail::button',['url'=>'http://127.0.0.1:8000/api/recovery/'.$user->id])
    Cambiar contraseña
@endcomponent