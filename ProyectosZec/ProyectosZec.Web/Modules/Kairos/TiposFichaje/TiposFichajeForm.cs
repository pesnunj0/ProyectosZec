
namespace ProyectosZec.Kairos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Kairos.TiposFichaje")]
    [BasedOnRow(typeof(Entities.TiposFichajeRow), CheckNames = true)]
    public class TiposFichajeForm
    {
        public String Tipo { get; set; }
    }
}