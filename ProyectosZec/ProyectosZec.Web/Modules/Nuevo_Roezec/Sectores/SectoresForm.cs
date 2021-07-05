
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.Sectores")]
    [BasedOnRow(typeof(Entities.SectoresRow), CheckNames = true)]
    public class SectoresForm
    {
        public String Sector { get; set; }
    }
}