
namespace ProyectosZec.Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Roezec.RoezecEstados")]
    [BasedOnRow(typeof(Entities.RoezecEstadosRow), CheckNames = true)]
    public class RoezecEstadosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Codigo { get; set; }
        public String Descripcion { get; set; }
    }
}