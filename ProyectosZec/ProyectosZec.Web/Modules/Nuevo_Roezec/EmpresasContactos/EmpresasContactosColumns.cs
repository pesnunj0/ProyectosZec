
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
        public String EmpresaRazon { get; set; }
        public String ContactoNombre { get; set; }
        public String TipoContactoContacto { get; set; }
        public DateTime FechaBaja { get; set; }
    }
}