
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.TiposContacto")]
    [BasedOnRow(typeof(Entities.TiposContactoRow), CheckNames = true)]
    public class TiposContactoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ContactoId { get; set; }
        [EditLink]
        public String Contacto { get; set; }
    }
}