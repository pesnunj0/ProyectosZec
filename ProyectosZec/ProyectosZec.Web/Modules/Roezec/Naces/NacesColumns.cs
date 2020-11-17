
namespace ProyectosZec.Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Roezec.Naces")]
    [BasedOnRow(typeof(Entities.NacesRow), CheckNames = true)]
    public class NacesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink,Width(100)]
        public String Nace { get; set; }
        [Width(80)]
        public String Codigo { get; set; }
        [Width(800)]
        public String Actividad { get; set; }
        [Hidden]
        public DateTime FechaAlta { get; set; }
        [Hidden]
        public String UsrAlta { get; set; }
    }
}