
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.TiposGarantiaTasas")]
    [BasedOnRow(typeof(Entities.TiposGarantiaTasasRow), CheckNames = true)]
    public class TiposGarantiaTasasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 GarantiaTasaId { get; set; }
        [EditLink]
        public String GarantiaTasa { get; set; }
    }
}