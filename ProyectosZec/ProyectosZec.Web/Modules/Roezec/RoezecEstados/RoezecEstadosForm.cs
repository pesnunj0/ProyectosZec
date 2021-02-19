
namespace ProyectosZec.Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Roezec.RoezecEstados")]
    [BasedOnRow(typeof(Entities.RoezecEstadosRow), CheckNames = true)]
    public class RoezecEstadosForm
    {
        public String Descripcion { get; set; }
    }
}