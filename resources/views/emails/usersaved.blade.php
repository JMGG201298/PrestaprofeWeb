@component('mail::message')
    Hola {{$user->name.' '.$user->last_name}}
    Tu contraseña es: {{$user->password}}
@endcomponent