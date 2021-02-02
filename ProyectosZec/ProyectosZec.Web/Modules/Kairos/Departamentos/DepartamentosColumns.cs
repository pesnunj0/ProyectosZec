
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.Departamentos")]
    [BasedOnRow(typeof(Entities.DepartamentosRow), CheckNames = true)]
    public class DepartamentosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public Int64 CodigoCliente { get; set; }
        [EditLink]
        public String Codigo { get; set; }
        public String Descripcion { get; set; }
        public DateTime FechaBorrado { get; set; }
        public Int32 SedeId { get; set; }
    }
}