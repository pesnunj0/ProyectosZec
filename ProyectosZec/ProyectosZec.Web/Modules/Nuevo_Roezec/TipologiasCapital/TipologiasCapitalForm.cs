
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.TipologiasCapital")]
    [BasedOnRow(typeof(Entities.TipologiasCapitalRow), CheckNames = true)]
    public class TipologiasCapitalForm
    {
        public String Capital { get; set; }
    }
}