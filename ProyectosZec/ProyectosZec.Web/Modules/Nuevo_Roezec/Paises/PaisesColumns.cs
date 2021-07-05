
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Paises")]
    [BasedOnRow(typeof(Entities.PaisesRow), CheckNames = true)]
    public class PaisesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PaisId { get; set; }
        [EditLink]
        public String Pais { get; set; }
        public String Capital { get; set; }
        public Int32 ContinenteId { get; set; }
    }
}