
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.Extras")]
    [BasedOnRow(typeof(Entities.ExtrasRow), CheckNames = true)]
    public class ExtrasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Width(30)]
        public Int64 Id { get; set; }

        [Width(100), QuickFilter]
        public String Sede { get; set; }

        [DisplayName("Nº Empl."), AlignCenter,Width(65)]
        public Int64 IdEmpleado { get; set; }

        [DisplayName("Empleado"), Width(240)]
        public String Empleado { get; set; }
        [DisplayName("Fecha"), QuickFilter, DisplayFormat("d")]
        public DateTime Fecha { get; set; }
        [Hidden]
        public Int32 Tipo { get; set; }
        [Width(70),AlignRight, DisplayFormat("#,##0.00")]
        public Decimal TotalHorasExtrasReales { get; set; }
        [Width(85),AlignRight, DisplayFormat("#,##0.00")]
        public Decimal TotalHorasExtrasConvertidas { get; set; }
        [AlignRight, DisplayName("Conv.HH:mm"), Width(100)]
        public String Convertidas { get; set; }
        [Width(85), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal TotalConsumidas { get; set; }
        [AlignRight, Width(100)]
        public Decimal Consumidashhmm { get; set; }

        [Width(85), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal Pendientes { get; set; }
        [AlignRight, Width(100)]
        public String Pendienteshhmm { get; set; }
        [Hidden]
        public Int64 IdAusenciaProgramadaTipo { get; set; }
        [Hidden]
        public String Dia { get; set; }
        [Width(110), QuickFilter]
        public String EstadoDesc { get; set; }
 
        [DisplayName("Fecha Acept/Canc"),Width(120),AlignCenter,Hidden]
        public DateTime FechaAceptacionCancelacion { get; set; }
        [Width(250),Hidden]
        public String MotivoCancelacion { get; set; }
    }
}