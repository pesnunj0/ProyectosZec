
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Islas")]
    [BasedOnRow(typeof(Entities.IslasRow), CheckNames = true)]
    public class IslasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IslaId { get; set; }
        [EditLink]
        public String NombreIsla { get; set; }
        public String Isla { get; set; }
    }
}