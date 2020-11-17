
namespace ProyectosZec.Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Roezec.Naces")]
    [BasedOnRow(typeof(Entities.NacesRow), CheckNames = true)]
    public class NacesForm
    {
        public String Nace { get; set; }
        public String Codigo { get; set; }
        public String Actividad { get; set; }
        public DateTime FechaAlta { get; set; }
        public String UsrAlta { get; set; }
    }
}