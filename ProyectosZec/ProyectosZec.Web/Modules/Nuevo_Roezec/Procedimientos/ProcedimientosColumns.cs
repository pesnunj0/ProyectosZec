
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Procedimientos")]
    [BasedOnRow(typeof(Entities.ProcedimientosRow), CheckNames = true)]
    public class ProcedimientosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProcedimientoId { get; set; }
        [EditLink, Width(280)]
        public String Procedimiento { get; set; }
    }
}