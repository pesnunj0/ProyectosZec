
namespace ProyectosZec.Inmovilizado.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inmovilizado.Tiposinmovilizado")]
    [BasedOnRow(typeof(Entities.TiposinmovilizadoRow), CheckNames = true)]
    public class TiposinmovilizadoForm
    {
        public String Tipo { get; set; }
    }
}