
namespace ProyectosZec.CuadroMandos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CuadroMandos.Subsectores")]
    [BasedOnRow(typeof(Entities.SubsectoresRow), CheckNames = true)]
 
    public class SubsectoresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SubsectorId { get; set; }
        [Width(100), QuickFilter]
        public String Sector { get; set; }
        [EditLink,Width(350)]
        public String Subsector { get; set; }
    }
}