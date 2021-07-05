
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Continentes")]
    [BasedOnRow(typeof(Entities.ContinentesRow), CheckNames = true)]
    public class ContinentesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ContinenteId { get; set; }
        [EditLink]
        public String Continente { get; set; }
    }
}