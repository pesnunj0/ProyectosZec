
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
        [Width(90), QuickFilter]
        public String TipoInmovilizadoTipo { get; set; }
        [EditLink,Width(300)]
        public String SubTipo { get; set; }
    }
}