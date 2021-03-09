
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.HorasExtraConsumidas")]
    [BasedOnRow(typeof(Entities.HorasExtraConsumidasRow), CheckNames = true)]
    public class HorasExtraConsumidasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [Hidden]
        public String IdHoraExtraDia { get; set; }
        public String Empleado { get; set; }
        public Decimal Tiempo { get; set; }
        [DisplayName("Dia"), QuickFilter, DisplayFormat("d")]
        public DateTime Dia { get; set; }
        public DateTime FechaAutorizacion { get; set; }
    }
}