
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.Continentes")]
    [BasedOnRow(typeof(Entities.ContinentesRow), CheckNames = true)]
    public class ContinentesForm
    {
        public String Continente { get; set; }
    }
}