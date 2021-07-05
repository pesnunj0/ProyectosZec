
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Subsectores")]
    [BasedOnRow(typeof(Entities.SubsectoresRow), CheckNames = true)]
    public class SubsectoresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SubsectorId { get; set; }
        [Width(90), DisplayName("Sector"), QuickFilter, QuickFilterOption("multiple", true)]
        public String Sector { get; set; }
        [EditLink, Width(250)]
        public String Subsector { get; set; }
    }
}