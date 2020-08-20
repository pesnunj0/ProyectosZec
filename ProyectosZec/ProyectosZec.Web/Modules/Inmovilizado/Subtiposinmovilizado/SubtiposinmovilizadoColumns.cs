
namespace ProyectosZec.Inmovilizado.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inmovilizado.Subtiposinmovilizado")]
    [BasedOnRow(typeof(Entities.SubtiposinmovilizadoRow), CheckNames = true)]
    public class SubtiposinmovilizadoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SubTipoInmovilizadoId { get; set; }
        public String TipoInmovilizadoTipo { get; set; }
        [EditLink]
        public String SubTipo { get; set; }
    }
}