
namespace ProyectosZec.Inmovilizado.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inmovilizado.Subtiposinmovilizado")]
    [BasedOnRow(typeof(Entities.SubtiposinmovilizadoRow), CheckNames = true)]
    public class SubtiposinmovilizadoForm
    {
        public Int32 TipoInmovilizadoId { get; set; }
        public String SubTipo { get; set; }
    }
}