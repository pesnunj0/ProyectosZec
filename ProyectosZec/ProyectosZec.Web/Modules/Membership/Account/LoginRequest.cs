
namespace ProyectosZec.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Introduzca aquí su usuario")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Introduzca aquí su contraseña"), Required(true)]
        public string Password { get; set; }
    }
}