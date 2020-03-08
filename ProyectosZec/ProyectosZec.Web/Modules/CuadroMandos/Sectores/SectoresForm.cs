
namespace ProyectosZec.CuadroMandos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CuadroMandos.Sectores")]
    [BasedOnRow(typeof(Entities.SectoresRow), CheckNames = true)]
    public class SectoresForm
    {
        public String Sector { get; set; }
    }
}