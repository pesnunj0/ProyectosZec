
namespace ProyectosZec.Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Roezec.Actividades")]
    [BasedOnRow(typeof(Entities.ActividadesRow), CheckNames = true)]
    public class ActividadesColumns
    {
        [Hidden, EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [Hidden,DisplayName("Nace"), QuickFilter, QuickFilterOption("multiple", true)]
        public Int32 IdNace { get; set; }
        [Hidden]
        public Int32 IdEmpresa { get; set; }
       
        [Width(80),QuickFilter]
        public String Codigo { get; set; }
        [Width(200)]
        public String Actividad { get; set; }
        [Width(200), QuickFilter, QuickFilterOption("multiple", true)]
        public String Empresa { get; set; }
        [Width(85), DisplayName("CIF")]
        public String Cif { get; set; }
        [Hidden]
        public String Direccion { get; set; }
        [Hidden]
        public String Cp { get; set; }
        public String Poblacion { get; set; }
        [QuickFilter]
        [Width(90)]
        public String Provincia { get; set; }
        [QuickFilter]
        [Width(90)]
        public String Isla { get; set; }
        [Hidden]
        public String NotasMarginales { get; set; }
        [Width(70), AlignRight, QuickFilter]
        public Int32 AnyoExpediente { get; set; }
        [QuickFilter, AlignRight]
        [Width(80)]
        public Int32 NumExpediente { get; set; }
        [AlignRight]
        public Int32 Agencia { get; set; }
        [QuickFilter]
        [Width(80)]
        public String Tecnico { get; set; }
        [Hidden]
        public String FormaJuridica { get; set; }
        [Hidden, AlignRight]
        public Double Superficie { get; set; }
        [Width(90)]
        public String ExentaAreaAcotada { get; set; }
        [Hidden]
        [DisplayName("Motivo Exenc.")]
        public String MotivosExencion { get; set; }
        [DisplayName("Obj. Empleo"), DisplayFormat("#,###"), AlignRight]
        public Double ObjetivoEmpleo { get; set; }
        [DisplayName("Obj. Invers."), DisplayFormat("#,###"), AlignRight, Width(100)]
        public Double ObjetivoInversion { get; set; }
        [Hidden, DisplayName("Observ. Empleo")]
        public String ObservacionesEmpleo { get; set; }
        [Hidden, DisplayName("Observ. Inversión")]
        public String ObservacionesInversion { get; set; }
        [Hidden, AlignRight]
        public Int32 PreEmpleo { get; set; }
        [Hidden, AlignRight]
        public Int32 PreInversion { get; set; }
        [Hidden, AlignRight]
        public Int32 TrasEmpleo { get; set; }
        [Hidden, AlignRight]
        public Int32 TrasInversion { get; set; }
        [Width(90), QuickFilter, DisplayFormat("d")]
        public DateTime FechaAlta { get; set; }
        [Hidden, DisplayFormat("d")]
        public DateTime FechaModificacion { get; set; }
        [Width(90), QuickFilter, DisplayFormat("d")]
        public DateTime FechaBaja { get; set; }
        [Width(150), AlignRight, DisplayName("Estado"), QuickFilter, QuickFilterOption("multiple", true)]
        public String Estado { get; set; }
        [Hidden, Width(90)]
        public String UsrAlta { get; set; }
        [DisplayName("Usr. Modif."), Width(90)]
        public String UsrModificacion { get; set; }
        [Hidden, Width(90), DisplayName("Usr. Baja")]
        public String UsrBaja { get; set; }


    }
}