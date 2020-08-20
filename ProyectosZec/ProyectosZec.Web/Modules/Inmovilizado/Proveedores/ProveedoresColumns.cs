
namespace ProyectosZec.Inmovilizado.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inmovilizado.Proveedores")]
    [BasedOnRow(typeof(Entities.ProveedoresRow), CheckNames = true)]
    public class ProveedoresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProveedorId { get; set; }
        [EditLink]
        public String Proveedor { get; set; }
    }
}