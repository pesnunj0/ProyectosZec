
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.KrsAusenciasProgramadasTipos")]
    [BasedOnRow(typeof(Entities.KrsAusenciasProgramadasTiposRow), CheckNames = true)]
    public class KrsAusenciasProgramadasTiposColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public Int64 CodigoCliente { get; set; }
        [EditLink]
        public String Codigo { get; set; }
        public String Descripcion { get; set; }
        public String ColorFondo { get; set; }
        public String ColorLetra { get; set; }
        public DateTime FechaBorrado { get; set; }
        public Boolean PermitirSolicitud { get; set; }
        public DateTime FechaActualizacion { get; set; }
        public Boolean ContabilizarTiempo { get; set; }
    }
}