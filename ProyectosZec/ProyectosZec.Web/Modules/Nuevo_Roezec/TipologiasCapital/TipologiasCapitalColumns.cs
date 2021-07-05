
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.TipologiasCapital")]
    [BasedOnRow(typeof(Entities.TipologiasCapitalRow), CheckNames = true)]
    public class TipologiasCapitalColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CapitalId { get; set; }
        [EditLink]
        public String Capital { get; set; }
    }
}