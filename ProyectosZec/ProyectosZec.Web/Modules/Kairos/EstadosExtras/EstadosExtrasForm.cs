
namespace ProyectosZec.Kairos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Kairos.EstadosExtras")]
    [BasedOnRow(typeof(Entities.EstadosExtrasRow), CheckNames = true)]
    public class EstadosExtrasForm
    {
        public String Descripcion { get; set; }
    }
}