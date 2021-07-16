
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.EmpresasContactos")]
    [BasedOnRow(typeof(Entities.EmpresasContactosRow), CheckNames = true)]
    public class EmpresasContactosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmpresaContactoId { get; set; }
        [Width(100)]
        public String EmpresaRazon { get; set; }
        [Width(150),EditLink]
        public String Fullname { get; set; }
        [Width(100),QuickFilter]
        public String TipoContactoContacto { get; set; }
        [Hidden, Width(130)]
        public String ContactoEmail { get; set; }
        [Width(100),Hidden]
        public DateTime FechaBaja { get; set; }
    }
}