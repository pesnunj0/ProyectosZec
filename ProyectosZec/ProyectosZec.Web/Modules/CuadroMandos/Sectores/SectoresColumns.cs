
namespace ProyectosZec.CuadroMandos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CuadroMandos.Sectores")]
    [BasedOnRow(typeof(Entities.SectoresRow), CheckNames = true)]
    public class SectoresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SectorId { get; set; }
        [EditLink]
        public String Sector { get; set; }
    }
}