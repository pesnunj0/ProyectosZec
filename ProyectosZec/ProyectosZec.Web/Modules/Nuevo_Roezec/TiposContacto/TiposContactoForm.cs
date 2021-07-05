
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.TiposContacto")]
    [BasedOnRow(typeof(Entities.TiposContactoRow), CheckNames = true)]
    public class TiposContactoForm
    {
        public String Contacto { get; set; }
    }
}