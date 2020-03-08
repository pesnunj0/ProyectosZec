
namespace ProyectosZec.CuadroMandos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CuadroMandos.Prescriptorinversor")]
    [BasedOnRow(typeof(Entities.PrescriptorinversorRow), CheckNames = true)]
    public class PrescriptorinversorForm
    {
        public String PrescriptorInversor { get; set; }
    }
}