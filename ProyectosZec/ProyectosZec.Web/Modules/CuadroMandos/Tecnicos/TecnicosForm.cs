
namespace ProyectosZec.CuadroMandos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CuadroMandos.Tecnicos")]
    [BasedOnRow(typeof(Entities.TecnicosRow), CheckNames = true)]
    public class TecnicosForm
    {
        public String NombreTecnico { get; set; }
        public String Tecnico { get; set; }
    }
}