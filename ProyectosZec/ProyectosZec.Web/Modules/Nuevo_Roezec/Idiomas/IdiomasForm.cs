
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.Idiomas")]
    [BasedOnRow(typeof(Entities.IdiomasRow), CheckNames = true)]
    public class IdiomasForm
    {
        public String Idioma { get; set; }
        public String NombreIdioma { get; set; }
    }
}