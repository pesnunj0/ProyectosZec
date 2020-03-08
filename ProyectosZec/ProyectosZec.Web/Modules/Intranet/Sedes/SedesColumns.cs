
namespace ProyectosZec.Intranet.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Intranet.Sedes")]
    [BasedOnRow(typeof(Entities.SedesRow), CheckNames = true)]
    public class SedesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SedeId { get; set; }
        [EditLink]
        public String Sede { get; set; }
    }
}