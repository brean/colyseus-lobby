
import React, { Component } from 'react';
import { Icon } from '@rmwc/icon';
import { Chip, ChipSet } from '@rmwc/chip';
import { 
  DataTable, DataTableContent, DataTableHead, DataTableRow,
  DataTableHeadCell, DataTableBody, DataTableCell
} from '@rmwc/data-table';

import { GAME_MODES, GAME_MAPS } from '../Settings';

import '@rmwc/icon/styles';
import '@rmwc/data-table/styles';
import '@rmwc/chip/styles';

type SelectedFilter = {
  game_modes: Map<string, boolean>;
  game_maps: Map<string, boolean>;
}

class RoomFilter extends Component<SelectedFilter, SelectedFilter> {
  constructor(props: SelectedFilter) {
    super(props);
    this.state = {
      game_modes: props.game_modes,
      game_maps: props.game_maps
    };
  }

  createCells(cellContent: Map<string, boolean>, original: Array<string>) {
    let cells = [];
    for (let mode of original) {
      cells.push(<Chip
        key={'game_mode_' + mode}
        label={mode}
        selected={cellContent.get(mode)}
        onInteraction={evt => {
          cellContent.set(mode, !cellContent.get(mode));
          this.forceUpdate();
        }}
      />);
    }
    return cells;
  }

  render() {
    return (
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>
                <Icon icon={{ 
                  icon: 'details', 
                  basename: 'material-icons',
                  size: 'small'}}> </Icon>&nbsp;
                Filter
              </DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            <DataTableRow>
              <DataTableCell>Game Mode</DataTableCell>
              <DataTableCell alignEnd>
                <ChipSet choice>
                  { this.createCells(this.state.game_modes, GAME_MODES) }
                </ChipSet>
              </DataTableCell>
            </DataTableRow>
            <DataTableRow>
              <DataTableCell>Map</DataTableCell>
              <DataTableCell>
                <ChipSet choice>
                  { this.createCells(this.state.game_maps, GAME_MAPS) }
                </ChipSet>
              </DataTableCell>
            </DataTableRow>
          </DataTableBody>
        </DataTableContent>
      </DataTable>
    );
  }
}

export { RoomFilter };