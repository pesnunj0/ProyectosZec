
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Naces")]
    [BasedOnRow(typeof(Entities.NacesRow), CheckNames = true)]
    public class NacesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 NaceId { get; set; }
        [EditLink,Width(80)]
        public String Nace { get; set; }
        [Width(100)]
        public String Codigo { get; set; }
        [Width(350)]
        public String Descripcion { get; set; }
        [Width(90), DisplayName("Sector"), QuickFilter]
        public String Sector { get; set; }
        [Width(200), DisplayName("SubSector"), QuickFilter, QuickFilterOption("CascadeFrom", "SectorId"), QuickFilterOption("multiple", true)]
        public String Subsector { get; set; }
    }
}