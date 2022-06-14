@component('mail::message')
    <p>Hola {{$user->name.' '.$user->last_name}}</p>
    <p>Tu contraseña restablecida es: {{$user->password}}</p>
@endcomponent