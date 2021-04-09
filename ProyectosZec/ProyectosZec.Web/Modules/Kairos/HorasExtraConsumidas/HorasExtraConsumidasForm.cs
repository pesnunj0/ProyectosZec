
namespace ProyectosZec.Kairos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Kairos.HorasExtraConsumidas")]
    [BasedOnRow(typeof(Entities.HorasExtraConsumidasRow), CheckNames = true)]
    public class HorasExtraConsumidasForm
    {
        public Int64 IdHoraExtra { get; set; }
        [DisplayFormat("#,##0.00")]
        public Decimal Tiempo { get; set; }
        public DateTime Dia { get; set; }
        
    }
}