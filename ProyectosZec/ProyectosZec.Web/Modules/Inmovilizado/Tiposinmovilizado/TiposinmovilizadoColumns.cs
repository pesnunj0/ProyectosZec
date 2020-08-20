
namespace ProyectosZec.Inmovilizado.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inmovilizado.Tiposinmovilizado")]
    [BasedOnRow(typeof(Entities.TiposinmovilizadoRow), CheckNames = true)]
    public class TiposinmovilizadoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TipoInmovilizadoId { get; set; }
        [EditLink]
        public String Tipo { get; set; }
    }
}