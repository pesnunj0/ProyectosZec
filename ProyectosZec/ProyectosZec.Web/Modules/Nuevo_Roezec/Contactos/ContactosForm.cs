
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.Contactos")]
    [BasedOnRow(typeof(Entities.ContactosRow), CheckNames = true)]
    public class ContactosForm
    {
        public String Nombre { get; set; }
        public String Apellidos { get; set; }
        public String Nif { get; set; }
        public String TelefonoFijo { get; set; }
        public String Movil { get; set; }
        public Int32 IdiomaId { get; set; }
        public String Email { get; set; }
    }
}