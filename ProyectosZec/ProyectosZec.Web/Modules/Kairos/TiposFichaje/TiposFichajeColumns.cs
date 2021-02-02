
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.TiposFichaje")]
    [BasedOnRow(typeof(Entities.TiposFichajeRow), CheckNames = true)]
    public class TiposFichajeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Id { get; set; }
        public String Tipo { get; set; }
    }
}