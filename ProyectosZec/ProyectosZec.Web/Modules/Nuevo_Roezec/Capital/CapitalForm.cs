
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.Capital")]
    [BasedOnRow(typeof(Entities.CapitalRow), CheckNames = true)]
    public class CapitalForm
    {
        public String Capital { get; set; }
    }
}