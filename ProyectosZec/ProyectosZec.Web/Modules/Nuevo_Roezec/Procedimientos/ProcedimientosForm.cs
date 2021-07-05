
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.Procedimientos")]
    [BasedOnRow(typeof(Entities.ProcedimientosRow), CheckNames = true)]
    public class ProcedimientosForm
    {
        public String Procedimiento { get; set; }
    }
}