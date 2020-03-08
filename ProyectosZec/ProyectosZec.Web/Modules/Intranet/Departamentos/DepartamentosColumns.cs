
namespace ProyectosZec.Intranet.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Intranet.Departamentos")]
    [BasedOnRow(typeof(Entities.DepartamentosRow), CheckNames = true)]
    public class DepartamentosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DepartamentoId { get; set; }
        [EditLink]
        public String Departamento { get; set; }
    }
}