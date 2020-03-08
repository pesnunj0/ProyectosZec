
namespace ProyectosZec.CuadroMandos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CuadroMandos.Estados")]
    [BasedOnRow(typeof(Entities.EstadosRow), CheckNames = true)]
    public class EstadosForm
    {
        public String Estado { get; set; }
    }
}